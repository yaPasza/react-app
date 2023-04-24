import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Sort by"
                options={[
                    { value: "title", name: "Name" },
                    { value: "body", name: "Description" },
                ]}
            />
        </div>
    );
};

export default PostFilter;
