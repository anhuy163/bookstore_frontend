import { Button, Typography, Spin, Empty, List } from "antd";
import styles from "./styles.module.less";
import BookCard from "../BookCard";
import FormWrapper from "../FormWrapper";

export default function ListBooks({ defaultValues, loading, title = "" }) {
  // console.log(defaultValues);

  return (
    <FormWrapper loading={loading}>
      {!loading && (
        <div className={styles.listBooksWrapper}>
          <Typography className={styles.listBooksTitle}>{title}</Typography>
          <List
            className={styles.listBooks}
            locale={{
              emptyText: (
                <Empty
                  description={
                    <span className={styles.noDataTitle}>
                      Không tồn tại sách với từ khóa tìm kiếm này
                    </span>
                  }
                />
              ),
            }}
            split={false}
            pagination={{
              pageSize: 15,
              responsive: true,
              position: "bottom",
            }}
            dataSource={defaultValues}
            renderItem={(item) => (
              <div className={styles.bookWrapper}>
                <BookCard book={item} />
              </div>
            )}
            itemLayout='vertical'
          />
          {/* {!defaultValues ? null : !!defaultValues.length ? (
          <div className={styles.listBooks}>
            {defaultValues?.map((book) => (
              <div className={styles.bookWrapper}>
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Empty
              description={
                <span className={styles.noDataTitle}>
                  Không tồn tại sách với từ khóa tìm kiếm này
                </span>
              }
            />
          </div>
        )} */}
        </div>
      )}
    </FormWrapper>
  );
}
