import {MigrationInterface, QueryRunner} from "typeorm";

export class addUser1596261751500 implements MigrationInterface {
    name = 'addUser1596261751500'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `first_name`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `last_name`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `phone`");
        await queryRunner.query("ALTER TABLE `users` ADD `status` enum ('ENABLE', 'DISABLE') NOT NULL DEFAULT 'ENABLE'");
        await queryRunner.query("ALTER TABLE `users` ADD `login_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_b1d0a1e8ae666d95893eb95c16` (`login_name`)");
        await queryRunner.query("ALTER TABLE `users` ADD `real_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `mobile` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `email` `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `avatar` `avatar` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` CHANGE `avatar` `avatar` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` CHANGE `email` `email` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `mobile`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `real_name`");
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_b1d0a1e8ae666d95893eb95c16`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `login_name`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `users` ADD `phone` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `last_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `first_name` varchar(255) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users` (`email`)");
    }

}
