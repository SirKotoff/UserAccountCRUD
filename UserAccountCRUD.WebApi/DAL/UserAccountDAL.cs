using Microsoft.EntityFrameworkCore;
using UserAccountCRUD.WebApi.Entity.Models;

namespace UserAccountCRUD.WebApi.DAL
{
    public class UserAccountDAL
    {
        ApplicationDbContext db =new();

        public IEnumerable<UserInfo> GetAllUsers()
        {
            return db.userinfo.ToList();
        }

        public UserInfo CreateUser(UserInfo userInfo)
        {
            db.userinfo.Add(userInfo);
            db.SaveChanges();
           Console.WriteLine($"{userInfo.Id} {userInfo.Name} {userInfo.Years} {userInfo.Car}");
           bool isSaved = db.SaveChanges() > 0;
           if (isSaved)
           {
               return userInfo;
           }

           return null;
        }

        public int UpdateStudent(UserInfo userInfo)
        {
            db.Entry(userInfo).State = EntityState.Modified;
            db.SaveChanges();
            return 1;
        }

        public UserInfo GetUser(int id)
        {
            UserInfo userinfo = db.userinfo.Find(id.ToString());
            return userinfo;
        }

        public int DeleteStudent(int id)
        {
            UserInfo emp = db.userinfo.Find(id.ToString());
            db.userinfo.Remove(emp);
            db.SaveChanges();
            return 1;
        }
    }
}
