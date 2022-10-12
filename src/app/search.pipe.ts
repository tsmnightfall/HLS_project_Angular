import { Pipe, PipeTransform } from '@angular/core';
import { ManagerService } from './manager.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(private service?: ManagerService){
  }
  transform(listsearch:any, keyword: any) {
    if (keyword =='') {
      return[]
    }
    keyword = keyword.toLowerCase()
    return listsearch.filter((data:any) => {
      return data.name.toLowerCase().includes(keyword)
    })
  }

}
