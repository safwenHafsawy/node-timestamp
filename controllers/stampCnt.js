const stamp = (req, res) => {
  let { date } = req.params;
  //checking if date is valid
  if (isNaN(new Date(Number(date))) && isNaN(new Date(date))) {
    return res.status(200).json({ error: "Invalid Date" });
  }

  if (date.includes("-")) {
    /*ISO format */
    const unix = Date.parse(date);
    const utc = new Date(date).toUTCString();
    return res.status(200).json({ unix, utc });
  } else if (date.includes(" ")) {
    /*long format date*/
    console.log(new Date(date));
    const timeZoneDate = date.concat(" UTC");
    const unix = Date.parse(timeZoneDate);
    const utc = new Date(unix).toUTCString();
    return res.status(200).json({ unix, utc });
  } else {
    /*timestamp format */
    const unix = Number(date);
    const utc = new Date(unix).toUTCString();
    return res.status(200).json({ unix, utc });
  }
};

const currentStamp = (req, res) => {
  const currentDate = new Date();
  const currentDateUTC = new Date().toUTCString();
  const currentDateUnix = (currentDate / 1000) * 1000;
  res.status(200).json({ unix: currentDateUnix, utc: currentDateUTC });
};

module.exports = { stamp, currentStamp };
