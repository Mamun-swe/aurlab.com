import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Text } from "../../components/text";
import { Navbar } from "../../components/navabr";
import { Footer } from "../../components/footer";
import { NoContent } from "../../components/no-content";
import { NetworkError } from "../../components/network-error";
import { PublicationListPreloader } from "../../components/preloader";
import { searchPublications } from "../api";
import { dateTodate } from "../../utils/helper";
import { RightDrawer } from "../../components/right-drawer";
import { CircleIconButton, PrimaryButton } from "../../components/button";
import { X } from "react-feather";

const index = () => {
  const router = useRouter();
  const { year, category, query } = router.query;
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [serverError, setServerError] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);

  /* fetch data */
  const fetchData = useCallback(async (year, category, query) => {
    try {
      const formData = {
        year,
        category,
        query,
      };

      const response = await searchPublications(formData);
      if (response && response.status === 200) {
        setData(response.data.data);
        setLoading(false);
      } else {
        setLoading(false);
        setServerError(true);
      }
    } catch (error) {
      if (error) {
        setLoading(false);
        setServerError(true);
        console.log(error.response);
      }
    }
  }, []);

  useEffect(() => {
    if (year && category && query) {
      fetchData(year, category, query);
    }
  }, [year, category, query, fetchData]);

  return (
    <div>
      <Navbar user={""} />

      <div className="container mx-auto mt-[81px]">
        <div className="grid grid-cols-1 text-center py-8">
          <Text className="text-xl font-bold text-gray-300">
            Your search results
          </Text>
        </div>
      </div>

      {/* Preloader view */}
      {isLoading && !serverError && !data.length ? (
        <PublicationListPreloader length={5} />
      ) : null}

      {/* Nocontent view */}
      {!isLoading && !serverError && !data.length ? (
        <NoContent message="No results found." />
      ) : null}

      {/* Network error view */}
      {!isLoading && serverError && !data.length ? <NetworkError /> : null}

      {/* Publication list view */}
      {!isLoading && !serverError && data.length > 0 ? (
        <div className="container mx-auto mb-14">
          <div className="grid grid-cols-1">
            {data &&
              data.map((item, i) => (
                <div
                  key={i}
                  className={`px-2 py-4 cursor-pointer ${
                    i + 1 < data.length ? "border-b" : ""
                  }`}
                  onClick={() => setSelectedPublication(item)}
                >
                  <Text className="text-md font-medium text-blue-500">
                    {item.title}
                  </Text>
                  <div className="inline-flex gap-2">
                    <Text className="text-xs font-normal text-gray-400">
                      {item?.category?.title || ""}
                    </Text>
                    <div className="h-1 w-1 rounded-full mt-2 bg-gray-400" />
                    <Text className="text-xs font-normal text-gray-400">
                      Published: {dateTodate(item.publicationDate)}
                    </Text>
                  </div>

                  <Text className="text-sm font-normal mt-2 text-gray-400">
                    {item.description}
                  </Text>
                </div>
              ))}
          </div>
        </div>
      ) : null}

      {/* Publication detail modal view */}
      <RightDrawer
        show={selectedPublication}
        onClick={() => setSelectedPublication(null)}
      >
        <div className="flex justify-between p-4 border-b">
          <p className="text-lg font-bold text-indigo-500 mt-1">
            {selectedPublication?.title || ""}
          </p>
          <div>
            <CircleIconButton
              type="button"
              onClick={() => setSelectedPublication(null)}
            >
              <X size={20} />
            </CircleIconButton>
          </div>
        </div>
        <div className="p-4">
          {selectedPublication ? (
            <>
              {/* Category */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Category</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs">
                    {selectedPublication?.category?.title || ""}
                  </p>
                </div>
              </div>

              {/* Authors */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Authors</p>
                </div>
                <div className="grow inline-flex">
                  {selectedPublication.authors &&
                  selectedPublication.authors.length > 0
                    ? selectedPublication.authors.map((item, i) => (
                        <p className="text-xs mr-1" key={i}>
                          {item}
                          {i + 1 < selectedPublication.authors.length
                            ? ","
                            : ""}
                        </p>
                      ))
                    : null}
                </div>
              </div>

              {/* Publication date */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Publication date</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs">
                    {dateTodate(
                      selectedPublication.publicationDate || new Date()
                    )}
                  </p>
                </div>
              </div>

              {/* Publisher */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Publisher</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs">
                    {selectedPublication.publisher || ""}
                  </p>
                </div>
              </div>

              {/* Conference */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Conference</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs">
                    {selectedPublication.conference || ""}
                  </p>
                </div>
              </div>

              {/* Citations */}
              <div className="flex gap-4 mb-5">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Citations</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs">
                    {selectedPublication.citations || 0}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="flex gap-4 mb-8">
                <div className="min-w-[95px] text-right">
                  <p className="text-xs text-gray-500">Description</p>
                </div>
                <div className="grow inline-flex">
                  <p className="text-xs leading-loose">
                    {selectedPublication.description || ""}
                  </p>
                </div>
              </div>

              {/* PDF viewer button */}
              <div className="text-center">
                <a href={selectedPublication.file} target="_blank">
                  <PrimaryButton type="button">Download pdf</PrimaryButton>
                </a>
              </div>
            </>
          ) : null}
        </div>
      </RightDrawer>

      <Footer />
    </div>
  );
};

export default index;
