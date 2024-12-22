// src/migrations/1703261234568-AddUserColumns.ts
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class AddUserColumns1703261234568 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add new columns
        await queryRunner.addColumns("user", [
            new TableColumn({
                name: "lastName",
                type: "varchar",
                isNullable: true
            }),
            new TableColumn({
                name: "age",
                type: "int",
                isNullable: true
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove the columns if migration needs to be reverted
        await queryRunner.dropColumn("user", "lastName");
        await queryRunner.dropColumn("user", "age");
    }
}