using Microsoft.AspNetCore.Mvc;
using UserAccountCRUD.WebApi.DAL;
using UserAccountCRUD.WebApi.Entity.Models;

namespace UserAccountCRUD.WebApi.Controllers
{
    public class UserController : Controller
    {
        UserAccountDAL obj = new();

        [HttpGet]
        [Route("api/User/Index")]
        public IEnumerable<UserInfo> Index()
        {
            return obj.GetAllUsers();
        }

        
        [Route("api/User/Create")]
        [HttpPost]
        public UserInfo Create(UserInfo user)
        {
            return obj.CreateUser(user);
        }

        [HttpGet]
        [Route("api/User/Details/{id}")]
        public UserInfo GetUserInfo(int id)
        {
            return obj.GetUser(id);
        }

        [HttpPut]
        [Route("api/User/Edit")]
        public int Edit(UserInfo userInfo)
        {
            return obj.UpdateStudent(userInfo);
        }

        [HttpDelete]
        [Route("api/User/Delete/{id}")]
        public int Delete(int id)
        {
            return obj.DeleteStudent(id);
        }
    }
}
