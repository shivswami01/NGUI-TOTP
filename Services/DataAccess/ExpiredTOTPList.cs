using Common.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DataAccess
{
    public class ExpiredTOTPList
    {
        public string SaveExpiredTOTP(ExpiredOTP expiredOTP)
        {
            string result = string.Empty;
            List<ExpiredOTP> list = new List<ExpiredOTP>();
            list.Add(expiredOTP);
            string expiredOTPJson = JsonConvert.SerializeObject(list, Formatting.Indented);
            //Append All Text is need to add with some additional logic here .. pending..
            File.WriteAllText("C:\\Test\\expirtedOTPList.json", expiredOTPJson);
            result = "Expired OTP Updated...";

            return result;
        }

        public IList<ExpiredOTP> GetExpiredOTP()
        {
            IList<ExpiredOTP> expiredOTPs = new List<ExpiredOTP>();
            if(System.IO.File.Exists("C:\\Test\\expirtedOTPList.json"))
            {
                string json = System.IO.File.ReadAllText("C:\\Test\\expirtedOTPList.json", System.Text.Encoding.UTF8);
                expiredOTPs = JsonConvert.DeserializeObject<IList<ExpiredOTP>>(json);
            }
            return expiredOTPs;
        }
    }
}
