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
    public class ExpiredOTPListBLL : IExpiredOTPListBLL
    {
      public ExpiredTOTPList expiredTOTP = new ExpiredTOTPList();

        public IList<ExpiredOTP> GetExpiredOTP()
        {
            return expiredTOTP.GetExpiredOTP();
        }

        public string SaveExpiredOTPList(ExpiredOTP expiredOTP)
        {
            return expiredTOTP.SaveExpiredTOTP(expiredOTP);
        }
    }
}
