﻿using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IUserListBLL
    {
        IList<Users> GetAllUserList();
        bool ValidateUser(string userId);
    }
}
