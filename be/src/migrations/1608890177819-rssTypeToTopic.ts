import {MigrationInterface, QueryRunner} from "typeorm";

export class rssTypeToTopic1608890177819 implements MigrationInterface {
    name = 'rssTypeToTopic1608890177819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `type` `topic` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` ADD `topic` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rss_channels` DROP COLUMN `topic`");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `topic` `type` varchar(255) NOT NULL");
    }

}
