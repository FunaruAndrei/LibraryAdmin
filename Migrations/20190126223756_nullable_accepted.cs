using Microsoft.EntityFrameworkCore.Migrations;

namespace BibliotecaOnline.Migrations
{
    public partial class nullable_accepted : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Accepted",
                table: "LoanRequests",
                nullable: true,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Accepted",
                table: "LoanRequests",
                nullable: false,
                oldClrType: typeof(bool),
                oldNullable: true);
        }
    }
}
