using BusinessLogic.Interfaces;
using Common.Models;
using DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Implementations
{
    public class UserListBLL : IUserListBLL
    {
        private UserList userDal;
        public UserListBLL(UserList userList) {
            this.userDal = userList;
        }

        public IList<Users> GetAllUserList()
        {
            return userDal.GetUserList();
        }
    }
}
