const stamp = (req, res) => {
  let { date } = req.params;
  //checking if date is valid
  if (isNaN(new Date(Number(date))) && isNaN(new Date(date))) {
    return res.status(200).json({ error: "Invalid Date" });
  }
  //handling req with unix timestamp
  if (date.search("-") === -1) {
    const new_date = new Date(Number(date));
    return res
      .status(200)
      .json({ unix: Number(date), utc: new_date.toUTCString() });
  }
  //handling req with regular date
  date = Date.parse(date);
  const utcDate = new Date(date).toUTCString();

  res.status(200).json({ unix: date, utc: utcDate });
};

const currentStamp = (req, res) => {
  const currentDate = new Date();
  const currentDateUTC = new Date().toUTCString();
  const currentDateUnix = (currentDate / 1000) * 1000;
  res.status(200).json({ unix: currentDateUnix, utc: currentDateUTC });
};

module.exports = { stamp, currentStamp };
