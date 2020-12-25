import {MigrationInterface, QueryRunner} from "typeorm";

export class languageWriting1608881280915 implements MigrationInterface {
    name = 'languageWriting1608881280915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `language` `language` enum ('zh-CN', 'ja-JP') NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `language` `language` enum ('zh-cn', 'ja-jp') NOT NULL");
    }

}
