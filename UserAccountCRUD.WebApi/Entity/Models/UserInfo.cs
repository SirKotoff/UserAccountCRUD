using System.ComponentModel.DataAnnotations;

namespace UserAccountCRUD.WebApi.Entity.Models
{
    public class UserInfo
    {
        [Key]
        public string Id { get; set; }
        public string? Years { get; set; }
        public string? Name { get; set; }
        public string? Car { get; set; }
    }
}
