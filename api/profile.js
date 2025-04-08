export default function handler(req, res) {
    const Name = "Akash";
    const Dob = new Date("2001-03-03");
    const CurrentDate = new Date();
    let Age = CurrentDate.getFullYear() - Dob.getFullYear();
  
    const HasBirthdayPassedThisYear =
      CurrentDate.getMonth() > Dob.getMonth() ||
      (CurrentDate.getMonth() === Dob.getMonth() && CurrentDate.getDate() >= Dob.getDate());
  
    if (!HasBirthdayPassedThisYear) {
      Age--;
    }
  
    res.status(200).json({
      Name,
      Dob: "03/03/2001",
      Age,
      Native: "Tirunelveli",
      Education: "Bachelor Of Engineering In Computer Science",
      Professional: "Software Developer",
      Batch: "2024"
    });
  }
  