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
    }
}
