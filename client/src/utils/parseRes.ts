import { job } from "../components/Jobs/Layout"

export type jobData = {
  company: string,
  createdAt: string,
  createdBy: string,
  position: string,
  status: string,
  updatedAt: string,
  _v: number,
  _id: string

}

const parseData = (value: jobData): job => {
  return {
    _id: value._id,
    _v: value._v,
    company: value.company,
    createdAt: new Date(value.createdAt),
    createdBy: value.createdBy,
    position: value.position,
    status: value.status,
    updatedAt: new Date(value.updatedAt),
  }
}

export { parseData }
