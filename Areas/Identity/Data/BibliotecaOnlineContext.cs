using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BibliotecaOnline.Areas.Identity.DbModels;
using BibliotecaOnline.DbModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace BibliotecaOnline.Models
{
    public class BibliotecaOnlineContext : IdentityDbContext<BibliotecaUser, IdentityRole<int>, int>
    {
        public BibliotecaOnlineContext(DbContextOptions<BibliotecaOnlineContext> options)
            : base(options)
        {
        }
        public DbSet<BibliotecaUser> BibliotecaUser { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<WishList> WishLists { get; set; }
        public DbSet<Store> Stores{ get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<LoanRequest> LoanRequests { get; set; }
        public DbSet<Loan> Loans { get; set; }

        public DbSet<BookAuthor> BookAuthors { get; set; }
        public DbSet<BookGenre> BookGenres { get; set; }
        public DbSet<BookStore> BookStores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<BookAuthor>()
            .HasKey(bc => new { bc.BookId, bc.AuthorId });
            modelBuilder.Entity<BookAuthor>()
                .HasOne(bc => bc.Book)
                .WithMany(b => b.BookAuthors)
                .HasForeignKey(bc => bc.BookId);
            modelBuilder.Entity<BookAuthor>()
                .HasOne(bc => bc.Author)
                .WithMany(c => c.BookAuthors)
                .HasForeignKey(bc => bc.AuthorId);


            modelBuilder.Entity<BookGenre>()
           .HasKey(bc => new { bc.BookId, bc.GenreId });
            modelBuilder.Entity<BookGenre>()
                .HasOne(bc => bc.Book)
                .WithMany(b => b.BookGenres)
                .HasForeignKey(bc => bc.BookId);
            modelBuilder.Entity<BookGenre>()
                .HasOne(bc => bc.Genre)
                .WithMany(c => c.BookGenres)
                .HasForeignKey(bc => bc.GenreId);

            modelBuilder.Entity<BookStore>()
          .HasKey(bc => new { bc.BookId, bc.StoreId });
                modelBuilder.Entity<BookStore>()
                    .HasOne(bc => bc.Book)
                    .WithMany(b => b.BookStores)
                    .HasForeignKey(bc => bc.BookId);
            modelBuilder.Entity<BookStore>()
                .HasOne(bc => bc.Store)
                .WithMany(c => c.BookStores)
                .HasForeignKey(bc => bc.StoreId);

            modelBuilder.Entity<Review>()
            .HasKey(bc => new { bc.BookId, bc.BibliotecaUserId, bc.ReviewId });
            modelBuilder.Entity<Review>()
                .HasOne(bc => bc.Book)
                .WithMany(b => b.Reviews)
                .HasForeignKey(bc => bc.BookId);
            modelBuilder.Entity<Review>()
                .HasOne(bc => bc.BibliotecaUser)
                .WithMany(c => c.Reviews)
                .HasForeignKey(bc => bc.BibliotecaUserId);
        }
    }
}
