import {MigrationInterface, QueryRunner} from "typeorm";

export class incrementId1608795919134 implements MigrationInterface {
    name = 'incrementId1608795919134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sources` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `sources` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `sources` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `users` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `users` ADD `id` int NOT NULL PRIMARY KEY AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `source_id` `source_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `title` `title` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `atom_link` `atom_link` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `description` `description` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `language` `language` enum ('zh-cn', 'ja-jp') NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `last_build_date` `last_build_date` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `title` `title` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `description` `description` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `pub_date` `pub_date` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `guid` `guid` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `link` `link` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `channel_id` `channel_id` int NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `created_at` `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `updated_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `name` `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `type` `type` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `type` `type` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `name` `name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `updated_at` `updated_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_sources` CHANGE `created_at` `created_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `channel_id` `channel_id` int NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `link` `link` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `guid` `guid` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `pub_date` `pub_date` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `description` `description` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `title` `title` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `updated_at` `updated_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_items` CHANGE `created_at` `created_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `last_build_date` `last_build_date` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `language` `language` enum ('zh-cn', 'zh-tw', 'ja-jp', 'en-us') NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `description` `description` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `atom_link` `atom_link` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `title` `title` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `source_id` `source_id` int NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `updated_at` `updated_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `rss_channels` CHANGE `created_at` `created_at` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `users` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `sources` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `sources` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `sources` ADD PRIMARY KEY (`id`)");
    }

}
