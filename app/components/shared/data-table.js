import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SharedDataTableComponent extends Component {
  @tracked currentPage = 1;
  pageSize = 5;

  get totalPages() {
    return Math.ceil((this.args.rows?.length || 0) / this.pageSize);
  }

  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.args.rows.slice(start, start + this.pageSize);
  }

  @action
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  @action
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
