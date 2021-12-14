// Styles import
import styles from './OfflineView.module.scss';

/**
 * Function represents the view that will show when the user happens to be offline.
 *
 * @returns view's elements
 */
function OfflineView() {
  return (
    <div className={styles.container}>
      <span>
        You appear to be offline!
      </span>
    </div>
  );
}

export default OfflineView;
