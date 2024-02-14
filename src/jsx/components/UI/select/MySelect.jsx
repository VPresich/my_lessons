import styles from './MySelect.module.css';

export const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div className={styles.section}>
      <select value={value} onChange={e => onChange(e.target.value)}>
        <option disabled={true} value="defaultValue">
          {defaultValue}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
