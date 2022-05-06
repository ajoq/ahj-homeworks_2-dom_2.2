import compare from './compare';
import arrowToggle from './arrowToggle';

export default function getSort(key, direction) {
  const tableBody = document.getElementById('tableBody');
  const dataSort = Array.from(tableBody.getElementsByTagName('tr'));
  compare(key, direction, dataSort);

  dataSort.forEach((item) => {
    tableBody.append(item);
  });

  arrowToggle(key, direction);
}
