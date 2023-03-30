import { Injectable } from '@nestjs/common';
import { AppVersionsList } from './data/versions';
import { AppVersions, CheckAppVersionDto } from './dto/check-version-dto';

@Injectable()
export class LiveUpdatesCapacitorService {


    async checkAppVersion(data: CheckAppVersionDto) {
        const {version_build, version_code, platform, version_os, ...rest} = data;
        console.log(data);
        const versions = AppVersionsList;
        const versionByPlatform = versions.filter((v) => v.platform === platform);
        const versionsByMiBuildVersion = versionByPlatform.filter(v => +v.min_version_build <= +version_code);
        const newVersion = versionsByMiBuildVersion.find(v => v.prev_version === version_build);

        if(newVersion) {
            return {
                version: newVersion.version,
                url: newVersion.url
            }
        }
        return null;
    } 

}
