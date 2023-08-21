using Common.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces
{
    public interface IExpiredOTPListBLL
    {
        string SaveExpiredOTPList(ExpiredOTP expiredOTP);
        IList<ExpiredOTP> GetExpiredOTP();
    }
}
