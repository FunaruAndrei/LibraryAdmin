using BibliotecaOnline.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BibliotecaOnline.Areas.Identity.Data
{
    public class BibliotecaContextFactory : IDesignTimeDbContextFactory<BibliotecaOnlineContext>
    {
        public BibliotecaContextFactory(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public BibliotecaOnlineContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BibliotecaOnlineContext>();
            optionsBuilder.UseSqlServer(Configuration.GetConnectionString("BibliotecaOnlineContextConnection"));

            return new BibliotecaOnlineContext(optionsBuilder.Options);
        }
    }
}
