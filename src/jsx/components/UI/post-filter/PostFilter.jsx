import { MySelect } from '../select/MySelect';
import { MyInput } from '../input/MyInput';
import styles from './PostFilter.module.css';

export const PostFilter = ({ filter, onChangeFilter }) => {
  return (
    <div className={styles.section}>
      <MyInput
        value={filter.query}
        placeholder="Search..."
        onChange={e => onChangeFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort =>
          onChangeFilter({ ...filter, sort: selectedSort })
        }
        disabled={true}
        defaultValue={'sort by'}
        options={[
          { value: 'title', name: 'by title' },
          { value: 'description', name: ' by description' },
        ]}
      />
    </div>
  );
};
