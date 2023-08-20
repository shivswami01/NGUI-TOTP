using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Caching;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess
{
    public class UserList
    {
        public IList<Users> GetUserList() {

            IList<Users> userLists = new List<Users> {
                new Users { UserId = "Test1", UserName = "ABC1" },
                new Users { UserId = "Test2", UserName = "EFG2" },
                new Users { UserId = "Test4", UserName = "A124" },
                new Users { UserId = "Test5", UserName = "E125" },
                new Users { UserId = "Test6", UserName = "A126" },
                new Users { UserId = "Test7", UserName = "E127" },
                new Users { UserId = "Test8", UserName = "A128" },
                new Users { UserId = "Test9", UserName = "E129" }
                };

            return userLists;
        }
    }
}
