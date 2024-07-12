import { action, makeObservable, observable } from 'mobx';
import { toast } from 'react-toastify';
import searchService from '@/apis/search.service';
import { SearchResult } from '@dto/search/SearchResult.dto';

class SearchStore {
  searchResults: SearchResult;

  constructor() {
    this.searchResults = {
      lectures: [],
      topics: [],
    };

    makeObservable(this, {
      searchResults: observable,
      searchByKeyword: action,
    });
  }

  async searchByKeyword(keyword: string): Promise<void> {
    const data = await searchService.searchByKeyword(keyword);
    this.searchResults = data;
  }
}

export default SearchStore;
