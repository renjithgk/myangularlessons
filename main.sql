--Adding column is add a comma and a select in bracket
--Adding row means add a union or union all
-- SELECT FROM TABLE(S) WHERE AND/OR GROUPBY HAVING ORDERBY

use centurion;

SELECT UserHostName, Count(*) from logactions group BY UserHostName;

USE AdventureWorks2012;
GO
SELECT   ProductNumber, Category =
      CASE ProductLine
         WHEN 'R' THEN 'Road'
         WHEN 'M' THEN 'Mountain'
         WHEN 'T' THEN 'Touring'
         WHEN 'S' THEN 'Other sale items'
         ELSE 'Not for sale'
      END,
   Name
FROM Production.Product ORDER BY ProductNumber;
GO

USE AdventureWorks2012;
GO
SELECT JobTitle, MAX(ph1.Rate)AS MaximumRate FROM HumanResources.Employee AS e JOIN HumanResources.EmployeePayHistory AS ph1 ON e.BusinessEntityID = ph1.BusinessEntityID GROUP BY JobTitle
HAVING (MAX(CASE WHEN Gender = 'M' THEN ph1.Rate ELSE NULL END) > 40.00 OR MAX(CASE WHEN Gender  = 'F' THEN ph1.Rate ELSE NULL END) > 42.00) ORDER BY MaximumRate DESC;

SELECT DECODE (Store_Name, 'Los Angeles', 'LA', 'San Francisco', 'SF', 'San Diego', 'SD', 'Others') Area, Sales, Txn_Date FROM Store_Information;

SELECT SUM(Sales) FROM Store_Information WHERE EXISTS (SELECT * FROM Geography WHERE Region_Name = 'West');

SELECT SUM (a1.Sales) FROM Store_Information a1 WHERE a1.Store_Name IN (SELECT Store_Name FROM Geography a2 WHERE a2.Store_Name = a1.Store_Name);

SELECT DISTINCT '" + date + @"'+'-" + i.Month.ToString("D2") + @"-" + i.Year + @"' [Date], (SELECT client_name FROM client WHERE id = client_id) Client,
LEFT((SELECT (SELECT name FROM employee WHERE employee.id = staff_id) + ', ' AS [text()] FROM Deployment WHERE day_" + date + @" IS NOT NULL AND day_" + date + @" NOT IN ('','M', 'C', 'L', 'U', 'A', 'O') AND month = d.month AND year = d.year AND day_night = 'D' AND client_id = d.client_id FOR XML PATH ('')), LEN((SELECT (SELECT name FROM employee WHERE employee.id = staff_id) + ', ' AS [text()] FROM Deployment WHERE day_" + date + @" IS NOT NULL AND day_" + date + @" NOT IN ('','M', 'C', 'L', 'U', 'A', 'O') AND month = d.month AND year = d.year AND day_night = 'D' AND client_id = d.client_id FOR XML PATH ('')))-1) [DayEmployees],
LEFT((SELECT (SELECT name FROM employee WHERE employee.id = staff_id) + ', ' AS [text()] FROM Deployment WHERE day_" + date + @" IS NOT NULL AND day_" + date + @" NOT IN ('','M', 'C', 'L', 'U', 'A', 'O') AND month = d.month AND year = d.year AND day_night = 'N' AND client_id = d.client_id FOR XML PATH ('')), LEN((SELECT (SELECT name FROM employee WHERE employee.id = staff_id) + ', ' AS [text()] FROM Deployment WHERE day_" + date + @" IS NOT NULL AND day_" + date + @" NOT IN ('','M', 'C', 'L', 'U', 'A', 'O') AND month = d.month AND year = d.year AND day_night = 'N' AND client_id = d.client_id FOR XML PATH ('')))-1) [NightEmployees]
FROM Deployment d WHERE day_" + date + @" IS NOT NULL AND day_" + date + @" <> '' AND month = '" + i.Month + @"' AND year = '" + i.Year + @"'")


