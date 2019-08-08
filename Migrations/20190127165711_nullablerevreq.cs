using Microsoft.EntityFrameworkCore.Migrations;

namespace BibliotecaOnline.Migrations
{
    public partial class nullablerevreq : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Accepted",
                table: "ReviewRequests",
                nullable: true,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Accepted",
                table: "ReviewRequests",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);
        }
    }
}
