using BusinessLogic.Implementations;
using BusinessLogic.Interfaces;
using Common.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UI.APIService.Controllers;

namespace UI.APIService.Test.Controllers
{
    [TestClass]
    public class ManageOTPControllerTest
    {
        IExpiredOTPListBLL expiredOTPListBLL = new ExpiredOTPListBLL();

        [TestMethod]
        public void ExpireOTPTest()
        {
            ManageOTPController manageOTPController = new ManageOTPController(expiredOTPListBLL);

            ExpiredOTP data = new ExpiredOTP();
            data.OTP = 123123;
            data.UserID = "Test1";
            var result = manageOTPController.ExpireOTP(data);
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void ValidateOTPTest()
        {
            ManageOTPController manageOTPController = new ManageOTPController(expiredOTPListBLL);

            ExpiredOTP data = new ExpiredOTP();
            data.OTP = 123123;
            data.UserID = "Test1";
            var result = manageOTPController.ValidateOTP(data);
            Assert.IsNotNull(result);
        }
    }
}
