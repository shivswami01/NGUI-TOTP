using OtpNet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public static class Extenstion
    {
        public static DateTime GetDate(string sDate)
        {
            DateTime result = DateTime.MinValue;
            string dateString = sDate;
            string format = "MM/dd/yyyy HH:mm:ss";
            if (DateTime.TryParseExact(dateString, format, null, System.Globalization.DateTimeStyles.None, out DateTime parsedDate))
            {
                result = parsedDate;
            }
            else
            {
                result = DateTime.Now;
            }
            return result;
        }
        public static long TOTPGenerator(string usersecretKey)
        {
            long result = 0;
            try
            {
                string secretKey = usersecretKey.ToString().Trim();
                var totp = new Totp(Base32Encoding.ToBytes(secretKey));
                while (true)
                {
                    string otp = totp.ComputeTotp(); //OtpNet third party dll from nuget
                    if (otp != null)
                    {
                        result = Convert.ToInt64(otp);
                    }
                    Console.WriteLine($"Current OTP: {otp}");
                    return result;
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return result;
            }
            
        }
        public static string GenerateRandomSecretKey(int length)
        {
            const string validCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            StringBuilder result = new StringBuilder();
            Random random = new Random(); //Using random generate the secret key

            for (int i = 0; i < length; i++)
            {
                int index = random.Next(validCharacters.Length);
                result.Append(validCharacters[index]);
            }

            return result.ToString();
        }
    }
}
