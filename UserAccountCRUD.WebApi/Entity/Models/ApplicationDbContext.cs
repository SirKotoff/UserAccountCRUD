using Microsoft.EntityFrameworkCore;

namespace UserAccountCRUD.WebApi.Entity.Models
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<UserInfo> userinfo { get; set; }

        public ApplicationDbContext()
        {

            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=UserAccountCRUD");
        }
    }
}
