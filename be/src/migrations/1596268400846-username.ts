import {MigrationInterface, QueryRunner} from "typeorm";

export class username1596268400846 implements MigrationInterface {
    name = 'username1596268400846'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_b1d0a1e8ae666d95893eb95c16` ON `users`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `login_name` `username` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_fe0bb3f6520ee0469504521e71`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `username` `login_name` varchar(255) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_b1d0a1e8ae666d95893eb95c16` ON `users` (`login_name`)");
    }

}
