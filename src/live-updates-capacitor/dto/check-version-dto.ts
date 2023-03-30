
export class CheckAppVersionDto {

    app_id: string;

    version_build: string;

    version_code: string;

    device_id: string;

    platform: "ios" | 'android';

    plugin_version: string;

    is_prod: boolean;

    is_emulator: boolean;

    custom_id: string;

    version_os: string;

    version_name: string;

}

export class AppVersions {
    version: string;
    platform: "ios" | 'android'
    min_version_build: string;
    prev_version: string;
    url: string;
}