import {MigrationInterface, QueryRunner} from "typeorm";

export class source1595211721096 implements MigrationInterface {
    name = 'source1595211721096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `sources` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `type` enum ('MANUAL', 'SPIDER', 'WECHAT', 'LINE', 'TELEGRAM') NOT NULL DEFAULT 'MANUAL', PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `sources`");
    }

}
