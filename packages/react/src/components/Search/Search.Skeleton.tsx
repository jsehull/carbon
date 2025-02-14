/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { usePrefix } from '../../internal/usePrefix';

export interface SearchSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Specify an optional className to add.
   */
  className?: string;

  /**
   * Specify whether the Search should be a small variant.
   */
  small?: boolean;
}

const SearchSkeleton = ({ small, className, ...rest }: SearchSkeletonProps) => {
  const prefix = usePrefix();
  const searchClasses = cx(className, {
    [`${prefix}--skeleton`]: true,
    [`${prefix}--search--xl`]: !small,
    [`${prefix}--search--sm`]: small,
  });

  return (
    <div className={searchClasses} {...rest}>
      <span className={`${prefix}--label`} />
      <div className={`${prefix}--search-input`} />
    </div>
  );
};

SearchSkeleton.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: PropTypes.string,

  /**
   * Specify whether the Search should be a small variant
   */
  small: PropTypes.bool,
};

SearchSkeleton.defaultProps = {
  small: false,
};

export default SearchSkeleton;
export { SearchSkeleton };
