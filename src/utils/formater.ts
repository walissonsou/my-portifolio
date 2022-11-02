import * as moment from 'moment'

export function relativeDataFormatter(date: string){
  return moment(date).fromNow();
  
}
