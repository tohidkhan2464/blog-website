import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {

    const { page, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <div className="fixed bottom-0 inset-x-0 bg-white border-t-2 py-2 border-t-slate-300">

            <div className=" flex items-center max-w-2xl gap-x-3 justify-between mx-auto">
                <div className="flex felx-row gap-x-3">
                    {page > 1 &&
                        (<button onClick={() => handlePageChange(page - 1)}
                            className="py-1 px-4 border-2 border-gray-300 rounded-lg">
                            Previous
                        </button>)
                    }

                    {page < totalPages &&
                        (<button onClick={() => handlePageChange(page + 1)}
                            className="py-1 px-4 border-2 border-gray-300 rounded-lg">
                            Next
                        </button>)
                    }
                </div>


                <p className="font-semibold text-sm">
                    Page {page} of {totalPages}
                </p>

            </div>




        </div>
    );
};

export default Pagination;