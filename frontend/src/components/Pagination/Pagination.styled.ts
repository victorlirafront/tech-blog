'use client';

import styled from 'styled-components';
const StyledPagination = styled.div`
  .pagination-wrapper {
    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      li {
        list-style: none;
      }

      .icon-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &.icon-arrow-left {
          img {
            transform: rotate(180deg);
          }
        }

        &.icon-arrow-right {
          img {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;

export default StyledPagination;
