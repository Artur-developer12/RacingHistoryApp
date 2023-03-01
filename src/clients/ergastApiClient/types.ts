export interface FetchDriversResponce {
  MRData: {
    xmlns: string
    series: string
    url: string
    limit: string
    offset: string
    total: string
    DriverTable: {
      Drivers: DriversType[]
    }
  }
}
export interface DriversType {
  driverId: string
  url: string
  givenName: string
  familyName: string
  dateOfBirth: string
  nationality: string
}
