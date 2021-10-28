const stamp = (req, res) => {
  let { date } = req.params;
  if (date.search("-") === -1) {
    const new_date = new Date(Number(date));
    return res.status(200).send({ d: new_date.toUTCString() });
  }
  date = new Date(date);
  const utcDate = new Date(date).toUTCString();
  const unixDate = new Date(date) / 1000;
  res.status(200).send({ unix: unixDate, utc: utcDate });
};

const currentStamp = (req, res) => {
  const currentDate = new Date();
  const currentDateUTC = new Date().toUTCString();
  const currentDateUnix = currentDate / 1000;
  res.status(200).json({ unix: currentDateUnix, utc: currentDateUTC });
};

module.exports = { stamp, currentStamp };
