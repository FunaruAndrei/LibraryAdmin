using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BibliotecaOnline.Migrations
{
    public partial class remove_rev_req : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReviewRequests");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReviewRequests",
                columns: table => new
                {
                    BookId = table.Column<int>(nullable: false),
                    BibliotecaUserId = table.Column<int>(nullable: false),
                    ReviewRequestId = table.Column<int>(nullable: false),
                    Accepted = table.Column<bool>(nullable: true),
                    Data = table.Column<DateTime>(nullable: false),
                    Rate = table.Column<double>(nullable: false),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReviewRequests", x => new { x.BookId, x.BibliotecaUserId, x.ReviewRequestId });
                    table.UniqueConstraint("AK_ReviewRequests_ReviewRequestId", x => x.ReviewRequestId);
                    table.ForeignKey(
                        name: "FK_ReviewRequests_AspNetUsers_BibliotecaUserId",
                        column: x => x.BibliotecaUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ReviewRequests_Books_BookId",
                        column: x => x.BookId,
                        principalTable: "Books",
                        principalColumn: "BookId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ReviewRequests_BibliotecaUserId",
                table: "ReviewRequests",
                column: "BibliotecaUserId");
        }
    }
}
