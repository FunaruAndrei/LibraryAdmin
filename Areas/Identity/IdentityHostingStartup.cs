using System;
using BibliotecaOnline.Areas.Identity.DbModels;
using BibliotecaOnline.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(BibliotecaOnline.Areas.Identity.IdentityHostingStartup))]
namespace BibliotecaOnline.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public IdentityHostingStartup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<BibliotecaOnlineContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("BibliotecaOnlineContextConnection")));

                services.AddDefaultIdentity<BibliotecaUser>()
                    .AddEntityFrameworkStores<BibliotecaOnlineContext>();

                //services.AddAuthentication().AddGoogle(googleOptions =>
                //{
                //    googleOptions.ClientId = Configuration["Authentication:Google:ClientId"];
                //    googleOptions.ClientSecret = Configuration["Authentication:Google:ClientSecret"];
                //});
            });
        }
    }
}