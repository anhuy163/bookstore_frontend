import Category from "../../components/CategoryWrapper";
import styles from "./styles.module.less";
import Link from "next/link";
import { BOOK_PATH } from "../../constants";
import useQueryGetBooksByCategoryId from "../../app/hooks/useQueryGetBooksByCategoryId";
import { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import axios from "axios";

export default function CategoryContainer({ data, categoryId, categoryName }) {
  // console.log(categoryId);

  // const { data, loading, error } = useQueryGetBooksByCategoryId(categoryId);

  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryTop}>
        <div className={styles.categoryTitle}>
          {categoryName}
          {" (Nổi bật)"}
        </div>
        <div>
          <Link href={`${BOOK_PATH}?categoryId=${categoryId}`}>
            <a className={styles.showAllButton}>XEM TẤT CẢ</a>
          </Link>
        </div>
      </div>

      <Category data={data} />
    </div>
  );
}
