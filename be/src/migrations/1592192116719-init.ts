import {MigrationInterface, QueryRunner} from "typeorm";

export class init1592192116719 implements MigrationInterface {
    name = 'init1592192116719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `first_name` varchar(255) NULL, `last_name` varchar(255) NULL, `role` enum ('USER', 'ADMIN') NOT NULL DEFAULT 'USER', `email` varchar(255) NULL, `password` varchar(255) NULL, `phone` varchar(255) NULL, `avatar` varchar(255) NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
