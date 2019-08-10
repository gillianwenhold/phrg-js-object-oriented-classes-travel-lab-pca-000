class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let total = 0
    const beginning = eastWest.indexOf(this.beginningLocation.horizontal)
    const end = eastWest.indexOf(this.endLocation.horizontal)
    if (beginning !== end) {
      total += end - beginning;
    }
    total += (this.endLocation.vertical - this.beginningLocation.vertical);
    return total;
  }

  estimatedTime(peak = false) {
    const travelled = this.blocksTravelled()
    if (peak === false) {
      return travelled / 3;
    } else {
      return travelled / 2;
    }
  }
}
