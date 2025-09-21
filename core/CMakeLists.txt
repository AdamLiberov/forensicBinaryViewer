cmake_minimum_required(VERSION 4.0)
project(forensicBinaryViewer)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

add_executable(forensicBinaryViewer pe-analysis/main.cpp)

target_compile_options(forensicBinaryViewer PRIVATE -fno-exceptions)
